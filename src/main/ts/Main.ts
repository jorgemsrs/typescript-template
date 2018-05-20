interface MainResult {
  exitCode: number;
  results: any;
  error?: boolean;
  errorMessage?: string;
}

export default class Main {
  static async run(args: string[]): Promise<MainResult> {
    return { exitCode: 0, results: "OK", error: false };
  }
}
