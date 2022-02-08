import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Select } from "@mantine/core";

import { Container, Main, ImgContainer } from "../styles/style";

export default function Home() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("what is here", value);
  }, [value]);

  return (
    <Container>
      <Main>
        <p className="title">bhok lagyo DiDi</p>

        <ImgContainer>
          <img
            src="https://i.ibb.co/kqVn9vL/532be211354644eabc05acb82a0b885f.jpg"
            alt="pic"
          />
        </ImgContainer>

        <Select
          searchable
          data={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
          ]}
          value={value}
          onChange={setValue}
          placeholder="asdasd"
        />
      </Main>
    </Container>
  );
}
