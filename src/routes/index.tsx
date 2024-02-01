import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import {action, redirect} from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <MyComponent />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

// ./src/routes/blog.tsx
const isAdmin = action(async (formData: FormData) => {
    'use server'
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    const username = formData.get('username')
    console.log(username)
})

function MyComponent() {
    return (
        <form action={isAdmin} method="post">
            <label for="username">Username:</label>
            <input type="text" name="username" />
            <input type="submit" value="submit" />
        </form>
    )
}
