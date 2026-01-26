import { Form, TerminalTypewriter, TerminalTypewriterOutput, UI } from "./UI";

export const Contact = (): React.JSX.Element => {
  return (
    <UI>
      <TerminalTypewriter text="> contact --help" />
      <TerminalTypewriterOutput
        text={
          " Reach me through any of the channels below. I usually reply within 24 hours."
        }
      />
      <TerminalTypewriter text="> contact --methods" />
      <TerminalTypewriterOutput
        text={`<li><strong style="color:#f43f5e;">email:</strong><u><a target="_blank" style="color:#90D5FF" href="mailto:omrawat.work@gmail.com">omrawat.work@gmail.com</a></u></li> <li><strong style="color:#f43f5e;">Github:</strong><a target="_blank" href="https://github.com/Robinxo" style="color:#90D5FF">github.com/Robinxo</a></br></li><li><strong style="color:#f43f5e;">linkedin:</strong><a target="_blank" href="https://www.linkedin.com/in/omr18/" style="color:#90D5FF">linkedin.com/in/omr18/</a></br></li>`}
      />
      <TerminalTypewriter text="> contact --form" />
      <Form />
    </UI>
  );
};
