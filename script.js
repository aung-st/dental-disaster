// Replace <header> with <h1>
const updateHeaders = (html) => {
  return html.replace(/<header>(.*?)<\/header>/g, '<h1>$1</h1>');
};

// Remove <footer>
const removeFooter = (html) => {
  return html.replace(/<footer>.*?<\/footer>/gs, '');
};

// Change <b> to <strong>
const updateBoldTags = (html) => {
  return html.replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>');
};

// Update the HTML
const updateHTML = (html) => {
  let updatedHTML = updateHeaders(html);
  updatedHTML = removeFooter(updatedHTML);
  updatedHTML = updateBoldTags(updatedHTML);
  return updatedHTML;
};

// Example Usage
const originalHTML = `
<header>Welcome to the site</header>
<p>This is a <b>bold</b> statement.</p>
<footer>Contact us at example@example.com</footer>
`;

const updatedHTML = updateHTML(originalHTML);
console.log(updatedHTML);
