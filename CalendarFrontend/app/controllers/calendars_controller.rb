class CalendarsController < ApplicationController
  skip_before_action :verify_authenticity_token
    def index

        @events = Event.all
       
        @dates = Event.select('start_date')
        @specificdate = Event.includes(params[:start_date])
        puts @specificdate.inspect
        
      end
      

    def show
        @event = Event.all
    end

    def edit
      @events = Event.find(params[:id])
    end


    def new
        @events = Event.new
      end
      
      def create
      Event.create(event_params)
      redirect_to calendars_path
      puts "Thanks for submitting these questions"
      end

      def update
        @events = Event.find(params[:id])
        @events.update(event_params)
        redirect_to calendars_path
      end
    
      def destroy
        Event.find(params[:id]).destroy
        redirect_to :back
      end

      



      private
      
      def event_params
        params.require(:event).permit(:start_date, :end_date, :description)
      end
end
