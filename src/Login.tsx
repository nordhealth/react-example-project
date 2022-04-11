import { FormEvent, useEffect, useRef, useState } from "react";
import "./Login.css";
import { Card, Stack, Input, Button } from "@nordhealth/react";
import type { Input as InputType } from "@nordhealth/components";

// helper hook for demo purposes
function useField(name: string, initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string>();
  const ref = useRef<InputType>();
  const valid = Boolean(value);

  useEffect(() => {
    if (valid) {
      setError(undefined);
    }
  }, [valid]);

  return {
    setError,
    valid,
    value,
    focus: () => ref.current?.focus(),
    inputProps: {
      name,
      value,
      onInput: (e: Event) => {
        const input = e.target as InputType;
        setValue(input.value);
      },
      error,
      ref,
    },
  };
}

export function Login() {
  const username = useField("username");
  const password = useField("password");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (username.valid && password.valid) {
      alert(`User: ${username.value}\nPassword: ${password.value}`);
    }

    if (!password.valid) {
      password.setError("Please enter a password");
      password.focus();
    }

    if (!username.valid) {
      username.setError("Please enter a username");
      username.focus();
    }
  }

  return (
    <>
      <Card padding="l">
        <h2 slot="header">Sign in to Nord</h2>
        <form action="#" onSubmit={handleSubmit}>
          <Stack>
            <Input
              label="Username"
              expand
              type="email"
              placeholder="user@example.com"
              {...username.inputProps}
            ></Input>

            <div className="password">
              <Input
                label="Password"
                expand
                type="password"
                placeholder="••••••••"
                {...password.inputProps}
              ></Input>

              <a href="#forgot">Forgot password?</a>
            </div>

            <Button type="submit" expand variant="primary">
              Sign in
            </Button>
          </Stack>
        </form>
      </Card>

      <Card className="n-align-center">
        New to Nord? <a href="#create">Create an account</a>.
      </Card>
    </>
  );
}
