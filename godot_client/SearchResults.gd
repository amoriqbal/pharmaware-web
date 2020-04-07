extends VBoxContainer
export(PackedScene) var RowContainerScene

#var RowContainer
# Declare member variables here. Examples:
# var a = 2
# var b = "text"
var results:Array
#var labels:Array

func _on_HTTPRequest_request_completed(result, response_code, headers, body):
	if response_code==200:
#		results.push_front(JSON.parse(body.get_string_from_utf8()))
		var bodyParsed=JSON.parse(body.get_string_from_utf8())
		if bodyParsed.error==OK:
 
			while not results.empty():
				var r=results.pop_front()
				if r is Node:
					r.get_ref().queue_free();

			for ele in bodyParsed.result[0].Products:
				results.push_back(weakref(RowContainerScene.instance()))
				#results.back().get_ref().text=JSON.print(ele)
				results.back().get_ref().rowStringJSON = JSON.print(ele)
				self.add_child(results.back().get_ref())
			
			#$Label.text=bodyParsed.result[0].name
			#$HBoxContainer.rowStringJSON = String("i am good")
			return
