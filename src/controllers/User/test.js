import { ApiResponse } from "../../utils/ApiResponse.js";

export const testController = (req, res) => {
  res.send(
    new ApiResponse(
      200,
      // {
      //   content: `Hi I am a test response. If you see me, everything is working as expected.`,
      //   by: req?.user?.name || "null",
      // },
      {
        paginated: res.paginated,
      },
      "Response received successfully."
    )
  );
};
