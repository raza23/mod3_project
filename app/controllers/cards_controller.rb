class CardsController < ApplicationController
    def index 
        cards = Card.all 
        render json: cards, status: 201


    end
end ##controller end
