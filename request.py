from flask import Flask, render_template
import map_gen
import room_gen
import json

app = Flask(__name__)

@app.route('/')
def main():
    message = "hello"
    return render_template("main.html", message=message)

@app.route('/gen_map', methods=['POST'])
def gen_map():
    grid = map_gen.generate_map(5, 5, 8)
    room_gen.generate_rooms(grid)
    render_for_test(grid)
    return json.dumps({'success':True, 'grid': grid}), 200, {'ContentType':'application/json'}

def render_for_test(grid):
    for col in grid:
        for room in col:
            print(room['type'], end = " ")
        print()
