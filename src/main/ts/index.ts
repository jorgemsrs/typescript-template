import Main from "./Main";

(async () => {
  try {
    const result = await Main.run(process.argv);

    if (result.error) {
      console.error(
        `Exit code ${result.exitCode}. Reason: ${result.errorMessage}`
      );
      process.exit(result.exitCode);
    }
    console.log(result.results);
  } catch (e) {
    console.log("UNKNOWN ERROR");
    process.exit(99);
  }
})();
