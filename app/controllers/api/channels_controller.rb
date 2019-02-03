class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all
        render :index
    end

    def show
        @channel = Channel.find_by(id: (Integer(params[:id])))
        @videos = @channel.videos
        render :show
    end

    def new
        @channel = Channel.new()
    end

    def create
        @channel = Channel.create(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 401
        end
    end

    def destroy
    end

    def channel_params
        params.require(:channel).permit(:id, :name, :body, :owner_id)
    end

end
