export default function(context) {
  //   console.log(context.route.path === "/admin");
  //   console.log(context.store.getters);

  console.log(context.store.getters.idToken);
  if (
    context.route.path === "/admin" &&
    context.store.getters.idToken.length == 0
  ) {
    context.redirect("/auth");
  }
}
