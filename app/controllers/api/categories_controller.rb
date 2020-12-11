class Api::CategoriesController < ApplicationController

    def index
        @categories = Category.all()
    end

    def show
        @category = Category.find_by(id: params[:id])

        if @category
            render :show
        else
            render json: ["Category does not exist"]
        end
    end

end