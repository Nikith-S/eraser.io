import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createFile = mutation({
  args: {
    fileName: v.string(),
    teamId: v.string(),
    createdBy: v.string(),
    archive: v.boolean(),
    document: v.string(),
    whiteBoard: v.string(),
  },
  handler: async (ctx, args) => {
    const result = ctx.db.insert("files", args);
    return result;
  },
});

export const getFiles = query({
  args: {
    teamId: v.string(),
  },
  handler: async (ctx, args) => {
    const result = ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("teamId"), args.teamId))
      .order("desc")
      .collect();

    return result;
  },
});

export const updateDocument = mutation({
  args: {
    id: v.id("files"),
    document: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.patch(args.id, { document: args.document });
    return result;
  },
});

export const getFileById = query({
  args: {
    _id: v.id("files"),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.get(args._id);
    return result;
  },
});
