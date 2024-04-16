import { ApiResponse } from "./ApiResponse.js";

export function paginateResults(model) {
  return async function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      results.results = await model.find().limit(limit).skip(startIndex);
      res.paginatedResults = results;
      next();
    } catch (error) {
      res
        .status(500)
        .send(new ApiResponse(500, error, "Error retrieving paginated data."));
    }
  };
}
