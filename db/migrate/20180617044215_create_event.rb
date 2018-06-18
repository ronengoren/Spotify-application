class CreateEvents < ActiveRecord::Migration[5.2]
    def change
      create_table :events, :force => true do |t|
        t.text :description
        t.date :start_date
        t.date :end_date
      end
    end
  end
  