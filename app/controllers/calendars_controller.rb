class CalendarsController < ApplicationController

    def index

        @events = Event.all
      
      end

    def show
        @event = Event.all
    end
    def new
        @events = Event.new
      end
      
      def create
      Event.create(event_params)
    #   redirect_to '/events'
      end
end
