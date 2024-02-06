from flask import Flask, render_template,request



app = Flask(__name__)
@app.route('/')
def home():
    return render_template('home.html')
@app.route('/china')
def china():
    return render_template('China_Web.html')
@app.route('/province')
def province():
    data = request.values.get('data')
    return render_template('Province_Web.html',data=data)
@app.route('/world')
def world():
    return render_template('World_Web.html')

if __name__ == '__main__':
    app.run(debug=True)