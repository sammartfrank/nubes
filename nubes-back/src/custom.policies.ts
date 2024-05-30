// handle_new_user.sql
`begin
  insert into public.users (id, email)
  values (new.id, new.email);
  return new;
end`;
