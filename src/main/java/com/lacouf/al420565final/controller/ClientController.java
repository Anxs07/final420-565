package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.model.Client;
import com.lacouf.al420565final.util.ClientFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@CrossOrigin
public class ClientController {

    @GetMapping("/listClients")
    public List<Client> fetchClients() {
        Stream<Client> stream = ClientFactory.getClients().stream();
        List<Client> listClients = stream.collect(Collectors.toList());
        return listClients;
    }

    @GetMapping("/listHommes")
    public List<Client> fetchHommes() {
        Stream<Client> stream = ClientFactory.getClients().stream();
        List<Client> listHommes = stream
                .filter(client -> client.getGender().equals("M"))
                .collect(Collectors.toList());
        return listHommes;
    }

    @GetMapping("/listOntariens")
    public List<Client> fetchOntarien() {
        Stream<Client> stream = ClientFactory.getClients().stream();
        List<Client> listOntariens = stream
                .filter(client -> client.getProvince().equals("ON"))
                .collect(Collectors.toList());
        return listOntariens;
    }


}
