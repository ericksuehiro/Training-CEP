package com.training.cep.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class CepController {
  @RequestMapping("/zipcode/{zipCode}")
  @ResponseBody
  public String getAddressByZipCode(@PathVariable("zipCode") String zipCode) {
    final String uri = "https://viacep.com.br/ws/" + zipCode + "/json/";

    RestTemplate restTemplate = new RestTemplate();
    String result = restTemplate.getForObject(uri, String.class);

    return result;
  }
}
