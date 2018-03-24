from flask import Flask, render_template
import map_gen

app = Flask(__name__)


@app.route('/')
def main():
    message = "hello"
    gen_map()
    return render_template("main.html", message=message)

def gen_map():
    grid = map_gen.generate_map(5, 5, 8)
    map_gen.render(grid)
