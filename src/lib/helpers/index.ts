export { qh, sanitize, dbRawStringCSV } from "./qh";

/**
 *
 * @param {*} date The date you are formating
 ***** @param {*} timezone The users time zone
 * @param {*} displayUTC If you want to display at UTC
 * @param {*} format The format of the datetime (Default L LT = 09/04/1986 8:30 PM)
 */
export function formatDate(
  date: Date | string | null,
  //  timezone?: string,
  displayUTC: boolean = false,
  format: string = "L LT"
): string {
  return "date to go here";
}
