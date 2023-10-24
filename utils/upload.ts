export async function requestUpload() {
  let res = await fetch("http://localhost:1521/request-upload");

  if (res.ok) {
    let { token } = await res.json();

    return token;
  }

  throw new Error("Failed to request upload");
}

export async function upload(data: FormData) {
  let res = await fetch("http://localhost:1521/upload", {
    method: "POST",
    body: data,
  });

  if (res.ok) {
    return;
  }

  throw new Error("Failed to upload");
}
