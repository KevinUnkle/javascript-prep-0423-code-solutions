# prep-html-script-tag-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What tag is needed to load JavaScript scripts into an HTML document?
  The <script> tag would be needed to load JavaScript scripts into an HTML document.
- How do you use a script tag to write JavaScript directly in the HTML document?
An example of how to write JavaScript directly in the HTML doc would be:
<script>
  document.getElementId("demo").innerHTML = "Hello JavaScript!";
</script>
- How do you use a script tag to load an external JavaScript file?
  To load an external JavaScript file, it would look like <script src="myscripts.js"></script>

## Notes

All student notes should be written here.

The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages as well.
The <script> tag is used to embed a client-side script (JavaScript).
The <script> element either contains scripting statements, or it points to an external script file through the src attribute.

<script> is supported in mostly all major browsers, and supports the Global Attributes in HTML.

Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.

Example: <script>
         document.getElementId("demo").innerHTML = "Hello JavaScript!!";
         </script>

HOWEVER!: Most broswers will display the <script> element with the following default values:
script {
display: none;
}

How to point to an external JavaScript file:

  <script src="myscripts.js"></script>

How to put an inline script inside the <script> element:

  <script>
    alert("Hello World")
  </script>

Definition and Usage:
The src attribute specifies the URL of an external script file.

If you want to run the same JavaScript on several pages in a web site, you should create an external JavaScript file, instead of writing the same script over and over again. Save the script file with a .js extension, and then refer to it using the src attribute in the <script> tag.

Note: The external script file cannot contain the <script> tag.
Note: Point to the external script file exactly where you would have written the script.

Format/Syntax:

  <script src="URL">
URL = The URL of the script file.
    Possible URL values:
        An absolute URL - points to another website, such as src="http://www.example.com/example.js"
        A relative URL - points to a file within a web site such as src="/scripts/example.js"

Tip: Also look at the <noscript> element for users that have disabled scripts in their browser, or have a browser that doesn't support client-side scripting.

CONSOLE NOTES:
The console object provides access to the browser's debugging console. The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

The console object can be accessed from any global object. Window on browsing scopes and WorkerGlobalScope as specific variants in workers via the property console. It's exposed as window.console, and can be referenced as console.

Example:
  console.log("Failed to open the specified link");

There are two ways to use each of the output methods; you can pass in a list of objects whose string representations get concatenated into one string, then output to the console, or you can pass in a string containing zero or more substitution strings followed by a list of objects to replace them.

OUTPUTTING TEXT TO THE CONSOLE:
the most frequently-used feature of the console is logging of text and other data. There are several categories of output you can generate, using the console.log( ), console.info( ), console.warn( ), console.error( ), or console.debug( ) methods. Each of these results in output styled differently in the log, and you can use the filtering controls provided by your browser to only view the kinds of output that interest you.

There are two ways to use each of the output methods, you can pass in a list of objects whose string representations get concatenated into one string, then output to the console, or you can pass in a string containig zero or more substitution strings followed by a list of objects to replace them.

OUTPUTTING A SINGLE OBJECT:
The simplest way to use the logging methods is to output a single object:

  const someObject = { str: "Some text", id: 5 };
  console.log(someObject);

  The output of this above ^ looks something like this:
  {str:"Some text", id:5}

How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
