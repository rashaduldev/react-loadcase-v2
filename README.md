# 🚀 LoadEase – Beautiful Loading Indicators & Skeleton Screens

[![NPM Version](https://img.shields.io/npm/v/loadease-v2)](https://www.npmjs.com/package/loadease-v2)
[![License](https://img.shields.io/npm/l/loadease-v2)](https://github.com/rashaduldev/loadease-v2/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/loadease-v2)](https://www.npmjs.com/package/loadease-v2)
[![GitHub Repo](https://img.shields.io/badge/github-code-blue?logo=github)](https://github.com/rashaduldev/loadease-v2)
[![Live Demo](https://img.shields.io/badge/demo-live-green)](http://react-loadcase-v2.vercel.app)
[![NPM Link](https://img.shields.io/badge/NPM-Loadease%20v2-red?logo=npm)](https://www.npmjs.com/package/loadease-v2)

**LoadEase** is a **lightweight and customizable** package for displaying beautiful **loading spinners, skeleton screens, and full-page loaders** in **React.js, Next.js, Vue.js, Nuxt.js, Laravel, and vanilla JavaScript** apps.

---

## 🎯 Features

- ✅ **Simple & Lightweight** – Minimal impact on performance  
- ✅ **Custom Loaders** – Includes spinners, progress bars, and animated skeleton screens  
- ✅ **Framework Agnostic** – Works with React, Vue, Next.js, Nuxt.js, Laravel, and plain JavaScript  
- ✅ **Easy Customization** – Customize colors, sizes, durations, and animations  
- ✅ **API-Aware Loaders** – Hide loaders automatically after fetch/axios requests  
- ✅ **Responsive & Accessible** – Mobile-friendly and keyboard/screen-reader compatible  

---
## 🚀 Usage (Basic Example)

---

### ⚛️ React

```jsx
import React from "react";
import { LoaderSpinner } from "loadease-v2";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <LoaderSpinner color="#14AE88" size={40} speed={800} />
    </div>
  );
}
```
### 🔮 Vue 3

```jsx
<template>
  <div>
    <h1>My Vue App</h1>
    <LoaderSpinner :color="'#14AE88'" :size="40" :speed="800" />
  </div>
</template>

<script>
import { LoaderSpinner } from "loadease-v2";

export default {
  components: { LoaderSpinner },
};
</script>

```

### 🧱 Laravel (Blade + JS)

```jsx
<!-- resources/views/welcome.blade.php -->
<div id="app">
  <h1>Laravel Loader Example</h1>
  <div id="loader"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/loadease-v2/dist/index.umd.js"></script>
<script>
  const loader = LoadEase.LoaderSpinner({
    color: "#14AE88",
    size: 40,
    speed: 1000,
  });

  document.getElementById("loader").appendChild(loader);
</script>

```
### ⚙️ Vanilla JavaScript (Raw Project)

```jsx
<div id="loader-container"></div>

<script src="https://cdn.jsdelivr.net/npm/loadease-v2/dist/index.umd.js"></script>
<script>
  const loader = LoadEase.LoaderSpinner({
    color: "#3490dc",
    size: 50,
  });

  document.getElementById("loader-container").appendChild(loader);
</script>

```
### 🌈 Tailwind CSS Example

```jsx
import { LoaderSpinner } from "loadease-v2";

export default function TailwindApp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoaderSpinner color="#14AE88" size={60} />
    </div>
  );
}

```
### 🎨 Bootstrap Example

```jsx
<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
  <div id="bootstrap-loader"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/loadease-v2/dist/index.umd.js"></script>
<script>
  const loader = LoadEase.LoaderSpinner({ color: "#0d6efd", size: 50 });
  document.getElementById("bootstrap-loader").appendChild(loader);
</script>

```
## 🧪 Axios/Fetch Loader Handling

### With `fetch` API

```jsx
import React, { useEffect, useState } from "react";
import { LoaderSpinner } from "loadease-v2";

function FetchExample() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <LoaderSpinner color="#14AE88" size={40} />
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

```
### With axios

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoaderSpinner } from "loadease-v2";

function AxiosExample() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
      setPost(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? <LoaderSpinner size={40} color="#14AE88" /> : <p>{post.title}</p>}
    </div>
  );
}

```
### 🌍 CDN (for HTML, Laravel, WordPress, etc.)

```jsx
<script src="https://cdn.jsdelivr.net/npm/loadease-v2/dist/index.umd.js"></script>

<div id="loader"></div>
<script>
  const loader = LoadEase.LoaderSpinner({ color: "#14AE88", size: 50 });
  document.getElementById("loader").appendChild(loader);
</script>


```
### 🛡️ TypeScript Support (React)

```jsx
import React, { useState } from "react";
import { LoaderSpinner } from "loadease-v2";

const TSComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>
      {loading ? (
        <LoaderSpinner size={40} color="#14AE88" speed={1000} />
      ) : (
        <p>Loaded!</p>
      )}
    </div>
  );
};

export default TSComponent;


```


## 📦 Installation

Install using npm or yarn:

```bash
npm install loadease-v2
# or
yarn add loadease-v2
