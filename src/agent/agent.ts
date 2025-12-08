export abstract class Agent {
  /**
   * Initiates a conversation interaction with the agent.
   * * This is the primary method for communicating with the agent. It processes the input
   * string based on the agent's current persona and logic, then returns a textual response.
   *
   * @param message - The input message or query from the user (or another agent).
   * @returns A promise that resolves to the agent's response text.
   */
  abstract chat(message: string): Promise<string>;

  /**
   * Triggers the agent's self-improvement mechanism to refine its internal system prompt.
   * * This method allows the agent to reflect on its past performance or incorporate external
   * feedback to rewrite its instructions, making it more adaptive and effective over time.
   *
   * @param feedback - Optional context or feedback to guide the optimization process.
   * @returns A promise that resolves when the evolution process is complete.
   */
  abstract evolve(feedback?: string): Promise<void>;
}
