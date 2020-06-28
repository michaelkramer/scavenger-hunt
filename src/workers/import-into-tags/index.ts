import cheerio from "cheerio";
import path from "path";
import fs from "fs";
import ItemTags from "../../models/Item-Tags";
import Backpack from "@michaelkramer/backpack";
const log = new Backpack.Logger(__filename);

async function load() {
  try {
    const p = path.join(__dirname, "./tag.txt");
    log.info("Importing");

    const html = fs.readFileSync(p).toString();

    const $ = cheerio.load(html);

    const items = $(".thes-entry");
    items.map(async (i, el) => {
      const title = $(el).find(".thes-ref-title").text().trim();
      const description = $(el).find("p").text().trim();
      const tag = await ItemTags.query().where("title", title).first();
      if (!tag) {
        log.info("Tag Not Found", title);
        await ItemTags.query()
          .insert({ title, description })
          .onError(async (error, queryBuilder) => {
            // Handle `SomeError` but let other errors go through.
            log.error(title, {
              message: error.message,
            });
            return Promise.reject(error);
          });
      }
    });
  } catch (error) {
    log.error(error);
  }
}

export default {
  run: () => load(),
};
