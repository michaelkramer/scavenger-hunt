import Users from "../../models/Users";

export * as SocialMedia from "./social-media";

const updateUser = async (id, user: Users) => {
  await Users.query().findById(id).patch(user);
  return await fetchUser(id);
};

const fetchUser = async (id) =>
  await Users.query().findById(id).withGraphJoined("userOauths");

/**
 * ! By passing the Users mobel this will expose the query for custom actions.
 */

export { updateUser, fetchUser, Users };
