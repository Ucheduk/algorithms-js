const c = limit => {
  console.log("Now @" + limit);
  if (limit === 1) return 1;

  c(limit -1);
};

c(5);