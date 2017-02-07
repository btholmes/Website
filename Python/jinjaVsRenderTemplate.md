# jinja way

from string import Template
    mePage = Template("""
        <h1>This is the me page template for ${name}</h1>
    """)

    @app.route('/me')
    def me():
    name = "BenItWorked"
    return mePage.substitute(name=name)

# render_template way 


        @app.rout('/me')
            def me(): 
                return render_template("index.html",sorted_array=display_arr)

 * Where index.html is in a folder called templates and looks like this 

        <doctype html>
        <html>
        <h1>Index page</h1>
        {% for item in sorted_array%}
        <p> {{ item }} </p>
        {% endfor %}
        </html>
