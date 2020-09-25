<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$admin_email = 'contact@michaelblaizot.com'; // Your Email
$message_min_length = 5; // Min Message Length

/**
 * Class Contact_Form
 */
class Contact_Form{

	/**
	 * Contact_Form constructor.
	 * @param $details
	 * @param $email_admin
	 * @param $message_min_length
	 */
	function __construct($details, $email_admin, $message_min_length){
	
		$this->name 				= stripslashes($details['m4p4GE']);
		$this->email 				= trim($details['f3chEtHu']);
		$this->subject 				= 'Une question ou un projet pour Michaël Blaizot'; // Subject
		$this->message 				= stripslashes($details['MUV3wr4D']);
	
		$this->email_admin 			= $email_admin;
		$this->message_min_length 	= $message_min_length;
		
		$this->response_status = 1;
		$this->response_html = '';
	}

	/**
	 * Validate email regex
	 * @return bool
	 */
	private function validateEmail()
	{
		$regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';
	
		if($this->email == '') { 
			return false;
		} else {
			$string = preg_replace($regex, '', $this->email);
		}
	
		return empty($string) ? true : false;
	}

	/**
	 * Validate fields
	 */
	private function validateFields(){

		// Check name
		if(!$this->name)
		{
			$this->response_html .= '<div class="alert alert-danger" role="alert">* Veuillez entrer votre nom </div>';
			$this->response_status = 0;
		}

		// Check email
		if(!$this->email)
		{
			$this->response_html .= '<div class="alert alert-danger" role="alert">* Veuillez entrer votre adresse e-mail </div>';
			$this->response_status = 0;
		}
		
		
		// Check valid email
		if($this->email && !$this->validateEmail())
		{
			$this->response_html .= '<div class="alert alert-danger" role="alert">Veuillez entrer une adresse e-mail valide </div>';
			$this->response_status = 0;
		}
		
		// Check message length
		if(!$this->message || strlen($this->message) < $this->message_min_length)
		{
			$this->response_html .= '<div class="alert alert-danger" role="alert">* Veuillez entrer votre message. Ce message doit comporter au moins '.$this->message_min_length.' caractères</div>';
			$this->response_status = 0;
		}
	}

	/**
	 * Send Mail
	 */
	private function sendEmail(){
				   
		$message  = $this->name." ".$this->firstname." \r\n";
		$message .= $this->email." \r\n";
		$message .= $this->message." \r\n";
	
		$mail = mail($this->email_admin, $this->subject, $message);
	
		if($mail){
			$this->response_status = 1;
			$this->response_html = '<div class="alert alert-success" role="alert">Merci de votre solicitation, je vous répondrai dans les plus bref délais</div>';
		}else{
			$this->response_status = 0;
			$this->response_html = '<div class="alert alert-danger" role="alert">Impossible d\'envoyer la demande de contact</div>';
		}
	}

	/**
	 * Send Request
	 */
	function sendRequest(){
		$this->validateFields();
		
		if($this->response_status)
		{
			$this->sendEmail();
		}

		$response = array();
		$response['status'] = $this->response_status;	
		$response['html'] = $this->response_html;
		echo json_encode($response);
	}
}

$contact_form = new Contact_Form($_POST, $admin_email, $message_min_length);
$contact_form->sendRequest();
