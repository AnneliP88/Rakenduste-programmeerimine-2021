package ee.anneli.backend2.controller;

import ee.anneli.backend2.model.Item;
import ee.anneli.backend2.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @PostMapping("items")
    public void postItem(@RequestBody Item item){
        itemService.saveItem(item);
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item) {
        itemService.editItem(item);
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }
}
