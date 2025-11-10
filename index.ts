#!/usr/bin/env bun
import { Command } from "commander";
import { green } from "colorette";
import ora from "ora";
import prompts from "prompts";

const program = new Command();
program.name("chashu").description("Chashu").version("1.0.0");

program
  .command("greet")
  .description("Say hello interactively")
  .action(async () => {
    const { name } = await prompts({
      type: "text",
      name: "name",
      message: "Your name?",
    });
    const spinner = ora("Thinking...").start();
    await Bun.sleep(800);
    spinner.succeed(green(`Hello, ${name}!`));
  });

program.parse();
