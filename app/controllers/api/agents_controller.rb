class Api::AgentsController < ApplicationController
    
    def index
       render json: Agent.unsold_homes
    end

    def buyers
      agent = Agent.find(params[:id])
      render json: agent.buyers
     # doesn't seriaize cities
     #  render json: Agent.buyers(params[:id])
     ## does seriaize cities
     #   render json: Buyer.buyers(params[:id])
    end


end
