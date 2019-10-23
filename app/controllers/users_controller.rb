class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users, status: 201
    end



    def new
        user = User.new
    end

    def create
        user = User.new(user_params)
        if user.save
        #   flash[:success] = "Have fun"
          redirect_to user
        else
          render 'new'
        end
      end
    
        def user_params
          params.require(:user).permit(:username, :clicks, :time)
        end
end
