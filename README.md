# Web Projects

<p><a href="https://aarends.github.io/cornershadows/" target="_blank">Corner Shadows</a></p>
<p><a href="https://aarends.github.io/dragdrop/" target="_blank">Drag & Drop</a></p>
<p><a href="https://aarends.github.io/webstorage/" target="_blank">Web Storage</a></p>

from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello() -> str:
    return "Hello World"


if __name__ == "__main__":
    app.run(debug=False)