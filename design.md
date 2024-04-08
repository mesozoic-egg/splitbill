This is a design thought process for the product. The fact it is minimal
examplifies how many technical decisions there have to be made, and 
would shed light on why big teams sometimes produce an overly complex
product even though the use cases are narrow.

I notice that if you are just iterating your ideas, the simpliest way
is to use a no-code tool. If you are looking for some next level of 
customization, Create React App or NextJS will work. Nothing is wrong
with fancy frameworks or toolings, they are in fact the most cost
efficient. But personally I have specific requirements in mind and I want
to dissect the cost of each technical decision with a minimal educational
project.

## App functionality

The app runs on browser, allows user to enter the amount each person spent
on each shared item, and finally calculate the transfer between 
parties so the bill is settled. 

## Build tools consideration

Do I want a build tool? The cost of is that it requires nodejs and overtime
I may have to start resolving dependency issues. Dependency of course
exists everywhere, but there's a distinction between dependency that
will resolve on their own vs those I have to maange myself. My app will
run on browser, so if browser fails, I'm confident the vendor will fix it. 
I'll use some hosting services, and if those failed, the vendor will fix it.
I would consider these reliable dependency. However, if one version of the npm
package I happen to depend on when I develop the project failed, I would have
to manually resolve it. If `npm install` or `npm ci` fails, the hosting service
wouldn't know if I just want to retry, or do something about it first, so that's 
an extra config I have to do. 

In general, running the app with plain html that loads a javascript with
borwser supported syntax is a better option. 

What do I lose? I would lose typescript of course. I can still write
JSDoc which can be optionally opt in and doesn't bloat my build tool (zero).

I also lose the ability to use styling framework like tailwind or sass. I think
those can be overcome.

So overall, I want a near 100% reliable CI pipeline and by removing nodejs
in the process, I think I can achieve it. Next I will think about the workaround
for the familiar framework I used to depend on.

## I still need React

I realize I still need React because this App requires a lot of interactions. 
And more importantly, I need JSX. While I could accomplish it with just plain JS
or React without JSX, there's a complexity. I need to measure the complexity of
implementing the interaction without React, vs the complexity of adding a build tool.

It's easy to fall into the line of thinking "I have a build tool now, I might as well
add typescript." That requires a careful analysis of the dependency. Normally when
using React and JSX, I would use Babel. What happens when I add typescript? Does 
it remove babel? if so maybe that's okay. If it's something on top of babel? Then
maybe not worth it. Turns out React supports JSX, so I can just use it as a standalone
dependency.

## Do I need bundler?

How much asset do I have? If all there is is just converting my JSX code into
javascript, then I won't need a bundler. For that to work, I will use the
minified React on my index.html directly