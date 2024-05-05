const btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
  try {
    const response = await fetch("/hello");
    if (!response.ok) {
      throw new Error("網路無法連接");
    }
    const data = await response.text();
    alert(data);
  } catch (error) {
    console.error(error);
  }
});
