const bruh = () => {
	return (document.createElement("button").innerText = "hey");
};

document.querySelector("#hi").appendChild(bruh());
