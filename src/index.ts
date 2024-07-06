import { Context, Schema } from "koishi";
import { handler } from "./parse.js";

export const name = "test";

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  ctx
    .command("reaction")
    .alias("rn")
    .action(async (_) => {
    let html=await fetch("https://chemequations.com/zh/random")
            .then((html) => html.text())
            .then(handler);
      return html
    });
}
