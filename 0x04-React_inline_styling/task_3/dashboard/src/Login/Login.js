import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  const styles = StyleSheet.create({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      borderColor: "red",
      gap: "0.5rem",
    },
    label: {
      marginBottom: "0.5rem",
    },
    button: {
      marginTop: "0.5rem",
    },
    // Media query for screens larger than 900px
    "@media screen and (min-width: 900px)": {
      formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      label: {
        marginRight: "1rem",
        marginBottom: 0,
      },
      button: {
        marginTop: 0,
      },
    },
  });

  return (
    <>
      <p>Login to access the full dashboard:</p>
      <form className={css(styles.formContainer)} action="">
        <label className={css(styles.label)} htmlFor="email">
          Email:
        </label>
        <input type="email" id="email" />

        <label className={css(styles.label)} htmlFor="password">
          Password:
        </label>
        <input type="password" id="password" />

        <button className={css(styles.button)}>OK</button>
      </form>
    </>
  );
}
