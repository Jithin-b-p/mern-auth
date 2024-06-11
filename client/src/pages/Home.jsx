function Home() {
  return (
    <section>
      <h1 className="mb-5 text-lg font-bold">
        Welcome✌🏼 to My MERN Auth App!!
      </h1>
      <p>
        This is a full-stack web application built with the MERN stack. It
        includes authentication features that allow users to sign up, login, and
        logout and provides access to protectd routes only for authenticated
        users.
      </p>
      <p>
        The front-end of this application is built with react and uses react
        router for client side routing. The backend is buit with node.js and
        express and uses mongodb as the database. Authentication is implemented
        using JSON web tokens.
      </p>
      <p>
        The application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack. Feel free to
        use it as a template for your own projects!
      </p>
    </section>
  );
}

export default Home;
