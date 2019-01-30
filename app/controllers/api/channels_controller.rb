class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all
        render :index
    end

    def show
        @channel = Channel.find_by(owner_id: params[:id])
        render :show
    end

    def new
    end

    def create
    end

    def destroy
    end
end
