const MarkdownBlock = {
  h1: ({ ...props }) => <h1 className="text-red-500" {...props} />,
  h2: ({ ...props }) => <h2 className="text-green-500" {...props} />,
  h3: ({ ...props }) => <h3 className="text-gray-500" {...props} />,
  p: ({ ...props }) => <p {...props} />,
  li: ({ ...props }) => (
    <li className="list-disc ml-6 text-blue-500" {...props} />
  ),
};

export default MarkdownBlock;
