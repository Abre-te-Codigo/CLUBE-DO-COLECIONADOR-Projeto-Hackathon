<h1>Clube do Colecionador - API</h1>
<h3>Example of requests v1.0</h3>

<code>Requirements for starting and testing remotely</code>

<h3>1º</h3>
use a git function clone to download the repository on your machine.

<h3>2º</h3>
Install <code>Npm</code> or <code>Yarn</code> & <code>Node.js</code> on your machine.
Use this guide to install node.js on your machine: https://nodejs.org/en/ or
Use Yarn installation guide https://classic.yarnpkg.com/en/docs/install/
<h3>OBS:</h3>When installing <code>node.js</code> automatically, you will have installed npm

Open the project folder and type in the terminal: <code>yarn dev</code>

<h2>BASE URL ONLINE: http://52.206.249.83:3333</h2>
<h4>OBS: use the _id as middleware</h4> 
<h2>BASE URL REMOTE: http://localhost:3333</h2>

<h4>GET</h4> /users -> view all users

<h4>POST</h4> /auth/register -> new user register
<pre>
{
	"username": "gfrancodev",
	"name": "Gustavo",
	"lastname": "Franco",
	"email": "exemple@mail.com",
	"password": "12345678"
}
</pre>
<h4>POST</h4> /auth/authenticate - authenticate 

<pre>
{
	"email": "exemple@gmail.com",
	"password": "12345678"
}
</pre>


<h4>POST</h4> /auth/forgot_password -> forgot password
<pre>
{
	"email": "exemple@gmail.com"
}
</pre>
<h4>POST</h4> /auth/reset_password -> reset password 
<pre>
{
	"email": "exemple@gmail.com",
	"token": "08R0Q3eOZV7kM6A8OlohryQ7CAfbD1hl1GYhe",
	"password": "guatavojorgee2511@gmail.com"
}
</pre>
<h4>POST</h4> /user/update -> update user profile
<h5>attr/typing</h5>
<pre>
{
	"_id:": String // Object ID derivate User
	"points": String,
	"seal": Number,
	"emblem": Number,
	"address": String,
	"zip": Number,
	"city": String,
	"state": String,
	"latitude": Number,
	"longitude": Number,
	"institute": String
}
</pre>
<h4>POST</h4> /user/delete -> delete user
<pre>
{
	"_id:": String // Object ID derivate User
}
</pre>

<h4>POST</h4> /art/create -> create art
<pre>
{
	"museum": String,
	"numero_do_registro": Number,
	"denominacao": String,
	"descricao": String,
	"foto1": String,
	"foto2": String,
	"titulo": String,
	"autor": String,
	"tecnica": String:,
	"materiais": String,
	"local_de_producao": String,
	"data_de_producao": String,
	"altura_cm": Number,
	"largura_cm": Number,
	"latitude": Number,
	"longitude": Number,
	"points": Number
}
</pre>
<h4>POST</h4> /art/update -> update art
<pre>
{
	"_id:": String // Object ID derivate Art
	"museum": String,
	"numero_do_registro": Number,
	"denominacao": String,
	"descricao": String,
	"foto1": String,
	"foto2": String,
	"titulo": String,
	"autor": String,
	"tecnica": String:,
	"materiais": String,
	"local_de_producao": String,
	"data_de_producao": String,
	"altura_cm": Number,
	"largura_cm": Number,
	"latitude": Number,
	"longitude": Number,
	"points": Number
}
</pre>

<h4>POST</h4> /art/delete -> delete art
<pre>
{
	"_id:": String // Object ID derivate Art
}
</pre>
<h4>GET</h4> /art/' -> view all arts
