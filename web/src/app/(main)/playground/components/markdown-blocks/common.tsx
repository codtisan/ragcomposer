import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MarkdownBlock = {
  h1: ({ ...props }) => <h1 className="text-red-500" {...props} />,
  h2: ({ ...props }) => <h2 className="text-green-500" {...props} />,
  h3: ({ ...props }) => <h3 className="text-gray-500" {...props} />,
  p: ({ ...props }) => <p {...props} />,
  li: ({ ...props }) => (
    <li className="list-disc ml-6 text-blue-500" {...props} />
  ),
  code: ({ ...props }) => {
    const { className, children } = props;
    const match = /language-(\w+)/.exec(className || "");

    return match ? (
      <SyntaxHighlighter
        style={dracula}
        PreTag="div"
        language={match[1]}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default MarkdownBlock;
