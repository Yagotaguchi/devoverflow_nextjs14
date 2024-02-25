"use server";
import Tag from "../database/tag.model";
import User from "../database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();
    // const { page = 1, pageSize = 20, filter, searchQuery } = params;

    // eslint-disable-next-line no-unused-vars
    const { userId, limit = 3 } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // Interaction...
    // Find interactions for the user and group by tags...
    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
    ];
  } catch (error) {
    console.log(error);
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    // const { page = 1, pageSize = 20, filter, searchQuery } = params;

    // eslint-disable-next-line no-unused-vars

    const tags = await Tag.find({});

    return { tags };
  } catch (error) {
    console.log(error);
  }
}
