# prep-html-skeleton-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What tags are necessary for a complete HTML Skeleton?
<!DOCTYPE html>, <html>, <head>, <title>, <body>, <h1>, <p>, </html>, </head>, </title>, </body>, </p>
- What type of content belongs within the `<head>` of an HTML document?
  The title of the HTML document.
- What type of content belongs within the `<body>` of an HTML document?
  Inside of the body you will find any h1's (headings), h2's, h3's, paragraph's (<p>), and possible links (<a href="">Link Example</a>) and images (<img src="example">).
- Where must the `DOCTYPE` declaration appear in a valid HTML document?
  In the very top-left of the page. The first line of code.

## Notes

All student notes should be written here.

BASIC HTML FORMAT/LAYOUT:

<!DOCTYPE html>
  <html>
    <body>

    <h1>My first heading</h1>

    <p>My first paragraph</p>

  </body>
</html>

Basics of HTML:

<!DOCTYPE html> declaration that defines this document is an HTML5 document
<html> element of the page
<head> contains meta information about the HTML page
<title> specifies a title for the HTML page
<body> defines the documents body, and is a container for all visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
<h1> defines a large heading
<p> defines a paragraph

HTML Links:
Links are defined with the <a> tag.
The link's destination is specified in the href attribute. Atrributes provide more info.
<a href="https://w3schools.com">This is a link</a>

HTML Images:
Images are defined with the <img> tag.
The source file (src), alternative text (alt), width, and height are provided as attributes.
<img src="w3schools.jpg" alt="w3schools.com" width="104" height="142">

Headings can range from <h1> to <h6> and beyond.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
