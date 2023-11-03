import { useState } from "react";
import React from "react";
import { Grid, Form, Input, Button, Modal } from "semantic-ui-react";
import { Typography, Box } from "@mui/material";

function Search({ setSearchedQuery }) {
  const [value, setValue] = useState("");

  const onFormSubmit = () => {
    setSearchedQuery(value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid columns={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2>
          Search Recipes with{" "}
          <span style={{ color: "orange" }}>Our Recipes</span>
        </h2>
        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="SEARCH RECIPES"
            action={{ icon: "search", color: "blue" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form>
        <Button
          style={{ marginTop: 10 }}
          color="blue"
          content="available recipes"
          onClick={handleOpen}
        />
        <Modal
          className="box"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Typography style={{paddingTop:20, paddingLeft:20, fontWeight:'bold', textAlign:'center'}} id="modal-modal-title" variant="h4" component="h2">
              Available Recipes
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ul style={{fontSize:18}}>
                <li>carrot</li>
                <li>broccoli</li>
                <li>asparagus</li>
                <li>cauliflower</li>
                <li>corn</li>
                <li>cucumber</li>
                <li>green pepper</li>
                <li>lettuce</li>
                <li>mushrooms</li>
                <li>onion</li>
                <li>potato</li>
                <li>pumpkin</li>
                <li>red pepper</li>
                <li>tomato</li>
                <li>beetroot</li>
                <li>brussel sprouts</li>
                <li>peas</li>
                <li>zucchini</li>
                <li>radish</li>
                <li>sweet potato</li>
                <li>artichoke</li>
                <li>leek</li>
                <li>cabbage</li>
                <li>celery</li>
                <li>chili</li>
                <li>garlic</li>
                <li>basil</li>
                <li>coriander</li>
                <li>parsley</li>
                <li>dill</li>
                <li>rosemary</li>
                <li>oregano</li>
                <li>cinnamon</li>
                <li>saffron</li>
                <li>green bean</li>
                <li>bean</li>
                <li>chickpea</li>
                <li>lentil</li>
                <li>apple</li>
                <li>apricot</li>
                <li>avocado</li>
                <li>banana</li>
                <li>blackberry</li>
                <li>blackcurrant</li>
                <li>blueberry</li>
                <li>boysenberry</li>
                <li>cherry</li>
                <li>coconut</li>
                <li>fig</li>
                <li>grape</li>
                <li>grapefruit</li>
                <li>kiwifruit</li>
                <li>lemon</li>
                <li>lime</li>
                <li>lychee</li>
                <li>mandarin</li>
                <li>mango</li>
                <li>melon</li>
                <li>nectarine</li>
                <li>orange</li>
                <li>papaya</li>
                <li>passion fruit</li>
                <li>peach</li>
                <li>pear</li>
                <li>pineapple</li>
                <li>plum</li>
                <li>pomegranate</li>
                <li>quince</li>
                <li>raspberry</li>
                <li>strawberry</li>
                <li>watermelon</li>
                <li>salad</li>
                <li>pizza</li>
                <li>pasta</li>
                <li>popcorn</li>
                <li>lobster</li>
                <li>steak</li>
                <li>bbq</li>
                <li>pudding</li>
                <li>hamburger</li>
                <li>pie</li>
                <li>cake</li>
                <li>sausage</li>
                <li>tacos</li>
                <li>kebab</li>
                <li>poutine</li>
                <li>seafood</li>
                <li>chips</li>
                <li>fries</li>
                <li>masala</li>
                <li>paella</li>
                <li>som tam</li>
                <li>chicken</li>
                <li>toast</li>
                <li>marzipan</li>
                <li>tofu</li>
                <li>ketchup</li>
                <li>hummus</li>
                <li>chili</li>
                <li>maple syrup</li>
                <li>parma ham</li>
                <li>fajitas</li>
                <li>champ</li>
                <li>lasagna</li>
                <li>poke</li>
                <li>chocolate</li>
                <li>croissant</li>
                <li>arepas</li>
                <li>bunny chow</li>
                <li>pierogi</li>
                <li>donuts</li>
                <li>rendang</li>
                <li>sushi</li>
                <li>ice cream</li>
                <li>duck</li>
                <li>curry</li>
                <li>beef</li>
                <li>goat</li>
                <li>lamb</li>
                <li>turkey</li>
                <li>pork</li>
                <li>fish</li>
                <li>crab</li>
                <li>bacon</li>
                <li>ham</li>
                <li>pepperoni</li>
                <li>salami</li>
                <li>ribs</li>
              </ul>
            </Typography>
          </Box>
        </Modal>
      </Grid.Column>
    </Grid>
  );
}

export default Search;
