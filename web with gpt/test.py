# make flask app
app = Flask(__name__)

# make a route to recieve the data from the form
@app.route('/form', methods=['POST'])