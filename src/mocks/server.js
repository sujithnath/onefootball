import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get(
    "https://web-sandbox.onefootball.com/assignments/player/data/fabio.json",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: "fabio",
          active: "true",
          "profile-id": "profile-111.json",
        }),
      );
    },
  ),
];

export const server = setupServer(...handlers);
